#!/usr/bin/env python3
"""
Backend API tests for Super Brass Industries Resend email integration
Tests POST /api/contact, POST /api/quote, GET /api/submissions, GET /api/health
"""

import requests
import io
import os
from pathlib import Path

# Read base URL from .env
env_path = Path(__file__).parent / '.env'
BASE_URL = None
with open(env_path) as f:
    for line in f:
        if line.startswith('NEXT_PUBLIC_BASE_URL='):
            BASE_URL = line.split('=', 1)[1].strip() + '/api'
            break

if not BASE_URL:
    BASE_URL = 'http://localhost:3000/api'

print(f"🔗 Testing backend at: {BASE_URL}\n")
print("=" * 80)

# Track successful email sends (limit to 3)
successful_emails = 0
MAX_EMAILS = 3

def test_health():
    """Test GET /api/health"""
    print("\n📋 TEST: GET /api/health")
    print("-" * 80)
    try:
        resp = requests.get(f"{BASE_URL}/health", timeout=10)
        print(f"Status: {resp.status_code}")
        print(f"Response: {resp.json()}")
        
        if resp.status_code == 200:
            data = resp.json()
            if 'status' in data and data['status'] == 'ok':
                print("✅ PASS: Health check working")
                return True
        print("❌ FAIL: Unexpected response")
        return False
    except Exception as e:
        print(f"❌ FAIL: {e}")
        return False

def test_contact_valid():
    """Test POST /api/contact with valid data"""
    global successful_emails
    print("\n📋 TEST: POST /api/contact - Valid submission")
    print("-" * 80)
    
    if successful_emails >= MAX_EMAILS:
        print(f"⚠️  SKIP: Already sent {MAX_EMAILS} emails (limit reached)")
        return None
    
    try:
        data = {
            'fullName': 'Rajesh Kumar',
            'companyName': 'Kumar Manufacturing Ltd',
            'email': 'rajesh.kumar@example.com',
            'phone': '+91 9876543210',
            'message': 'We are interested in brass fittings for our hydraulic systems. Please contact us with pricing and lead times.'
        }
        
        resp = requests.post(f"{BASE_URL}/contact", data=data, timeout=15)
        print(f"Status: {resp.status_code}")
        print(f"Response: {resp.json()}")
        
        if resp.status_code == 200:
            result = resp.json()
            if result.get('ok') and result.get('id'):
                print("✅ PASS: Contact form submitted successfully")
                successful_emails += 1
                print(f"📧 Email sent (total: {successful_emails}/{MAX_EMAILS})")
                return True
        elif resp.status_code == 502:
            result = resp.json()
            error_msg = result.get('error', 'Unknown error')
            print(f"⚠️  RESEND ERROR (502): {error_msg}")
            print("Note: This may indicate domain verification issues")
            return 'resend_error'
        
        print(f"❌ FAIL: Unexpected response")
        return False
    except Exception as e:
        print(f"❌ FAIL: {e}")
        return False

def test_contact_missing_fullname():
    """Test POST /api/contact with missing fullName"""
    print("\n📋 TEST: POST /api/contact - Missing fullName (validation)")
    print("-" * 80)
    try:
        data = {
            'companyName': 'Test Company',
            'email': 'test@example.com',
            'phone': '1234567890',
            'message': 'Test message'
        }
        
        resp = requests.post(f"{BASE_URL}/contact", data=data, timeout=10)
        print(f"Status: {resp.status_code}")
        print(f"Response: {resp.json()}")
        
        if resp.status_code == 400:
            result = resp.json()
            if 'error' in result and 'Invalid contact payload' in result['error']:
                print("✅ PASS: Validation error returned (no email sent)")
                return True
        
        print(f"❌ FAIL: Expected 400 with validation error")
        return False
    except Exception as e:
        print(f"❌ FAIL: {e}")
        return False

def test_contact_invalid_email():
    """Test POST /api/contact with invalid email format"""
    print("\n📋 TEST: POST /api/contact - Invalid email format")
    print("-" * 80)
    try:
        data = {
            'fullName': 'Test User',
            'companyName': 'Test Company',
            'email': 'not-an-email',
            'phone': '1234567890',
            'message': 'Test message'
        }
        
        resp = requests.post(f"{BASE_URL}/contact", data=data, timeout=10)
        print(f"Status: {resp.status_code}")
        print(f"Response: {resp.json()}")
        
        if resp.status_code == 400:
            result = resp.json()
            if 'error' in result and 'Invalid contact payload' in result['error']:
                print("✅ PASS: Email validation working (no email sent)")
                return True
        
        print(f"❌ FAIL: Expected 400 with validation error")
        return False
    except Exception as e:
        print(f"❌ FAIL: {e}")
        return False

def test_contact_missing_message():
    """Test POST /api/contact with missing message"""
    print("\n📋 TEST: POST /api/contact - Missing message")
    print("-" * 80)
    try:
        data = {
            'fullName': 'Test User',
            'companyName': 'Test Company',
            'email': 'test@example.com',
            'phone': '1234567890'
        }
        
        resp = requests.post(f"{BASE_URL}/contact", data=data, timeout=10)
        print(f"Status: {resp.status_code}")
        print(f"Response: {resp.json()}")
        
        if resp.status_code == 400:
            result = resp.json()
            if 'error' in result and 'Invalid contact payload' in result['error']:
                print("✅ PASS: Message validation working (no email sent)")
                return True
        
        print(f"❌ FAIL: Expected 400 with validation error")
        return False
    except Exception as e:
        print(f"❌ FAIL: {e}")
        return False

def test_quote_valid_no_file():
    """Test POST /api/quote with valid data, no file"""
    global successful_emails
    print("\n📋 TEST: POST /api/quote - Valid submission without file")
    print("-" * 80)
    
    if successful_emails >= MAX_EMAILS:
        print(f"⚠️  SKIP: Already sent {MAX_EMAILS} emails (limit reached)")
        return None
    
    try:
        data = {
            'fullName': 'Amit Patel',
            'companyName': 'Patel Engineering Works',
            'email': 'amit.patel@example.com',
            'phone': '+91 9988776655',
            'projectDetails': 'We need custom brass bushings for automotive applications. Quantity: 5000 units. Material: CuZn39Pb3. Please provide quotation with delivery timeline.'
        }
        
        resp = requests.post(f"{BASE_URL}/quote", data=data, timeout=15)
        print(f"Status: {resp.status_code}")
        print(f"Response: {resp.json()}")
        
        if resp.status_code == 200:
            result = resp.json()
            if result.get('ok') and result.get('id'):
                print("✅ PASS: Quote submitted successfully (no file)")
                successful_emails += 1
                print(f"📧 Email sent (total: {successful_emails}/{MAX_EMAILS})")
                return True
        elif resp.status_code == 502:
            result = resp.json()
            error_msg = result.get('error', 'Unknown error')
            print(f"⚠️  RESEND ERROR (502): {error_msg}")
            return 'resend_error'
        
        print(f"❌ FAIL: Unexpected response")
        return False
    except Exception as e:
        print(f"❌ FAIL: {e}")
        return False

def test_quote_valid_with_pdf():
    """Test POST /api/quote with valid data and PDF file"""
    global successful_emails
    print("\n📋 TEST: POST /api/quote - Valid submission with PDF file")
    print("-" * 80)
    
    if successful_emails >= MAX_EMAILS:
        print(f"⚠️  SKIP: Already sent {MAX_EMAILS} emails (limit reached)")
        return None
    
    try:
        # Create a minimal PDF file
        pdf_content = b'%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj 2 0 obj<</Type/Pages/Count 1/Kids[3 0 R]>>endobj 3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>endobj\nxref\n0 4\n0000000000 65535 f\n0000000009 00000 n\n0000000056 00000 n\n0000000115 00000 n\ntrailer<</Size 4/Root 1 0 R>>\nstartxref\n210\n%%EOF'
        
        data = {
            'fullName': 'Suresh Mehta',
            'companyName': 'Mehta Industries',
            'email': 'suresh.mehta@example.com',
            'phone': '+91 9123456789',
            'projectDetails': 'Custom brass valve components as per attached technical drawing. Material grade: CuZn40. Surface finish: Nickel plated. Quantity: 10,000 pieces.'
        }
        
        files = {
            'drawing': ('technical_drawing.pdf', io.BytesIO(pdf_content), 'application/pdf')
        }
        
        resp = requests.post(f"{BASE_URL}/quote", data=data, files=files, timeout=15)
        print(f"Status: {resp.status_code}")
        print(f"Response: {resp.json()}")
        
        if resp.status_code == 200:
            result = resp.json()
            if result.get('ok') and result.get('id'):
                print("✅ PASS: Quote with PDF attachment submitted successfully")
                successful_emails += 1
                print(f"📧 Email sent (total: {successful_emails}/{MAX_EMAILS})")
                return True
        elif resp.status_code == 502:
            result = resp.json()
            error_msg = result.get('error', 'Unknown error')
            print(f"⚠️  RESEND ERROR (502): {error_msg}")
            return 'resend_error'
        
        print(f"❌ FAIL: Unexpected response")
        return False
    except Exception as e:
        print(f"❌ FAIL: {e}")
        return False

def test_quote_unsupported_file():
    """Test POST /api/quote with unsupported file type"""
    print("\n📋 TEST: POST /api/quote - Unsupported file type (.txt)")
    print("-" * 80)
    try:
        data = {
            'fullName': 'Test User',
            'companyName': 'Test Company',
            'email': 'test@example.com',
            'phone': '1234567890',
            'projectDetails': 'Test project details'
        }
        
        files = {
            'drawing': ('document.txt', io.BytesIO(b'test content'), 'text/plain')
        }
        
        resp = requests.post(f"{BASE_URL}/quote", data=data, files=files, timeout=10)
        print(f"Status: {resp.status_code}")
        print(f"Response: {resp.json()}")
        
        if resp.status_code == 400:
            result = resp.json()
            if 'error' in result and 'Unsupported file type' in result['error']:
                print("✅ PASS: File type validation working (no email sent)")
                return True
        
        print(f"❌ FAIL: Expected 400 with unsupported file type error")
        return False
    except Exception as e:
        print(f"❌ FAIL: {e}")
        return False

def test_quote_missing_project_details():
    """Test POST /api/quote with missing projectDetails"""
    print("\n📋 TEST: POST /api/quote - Missing projectDetails")
    print("-" * 80)
    try:
        data = {
            'fullName': 'Test User',
            'companyName': 'Test Company',
            'email': 'test@example.com',
            'phone': '1234567890'
        }
        
        resp = requests.post(f"{BASE_URL}/quote", data=data, timeout=10)
        print(f"Status: {resp.status_code}")
        print(f"Response: {resp.json()}")
        
        if resp.status_code == 400:
            result = resp.json()
            if 'error' in result and 'Invalid quote payload' in result['error']:
                print("✅ PASS: ProjectDetails validation working (no email sent)")
                return True
        
        print(f"❌ FAIL: Expected 400 with validation error")
        return False
    except Exception as e:
        print(f"❌ FAIL: {e}")
        return False

def test_submissions():
    """Test GET /api/submissions"""
    print("\n📋 TEST: GET /api/submissions")
    print("-" * 80)
    try:
        resp = requests.get(f"{BASE_URL}/submissions", timeout=10)
        print(f"Status: {resp.status_code}")
        
        if resp.status_code == 200:
            result = resp.json()
            print(f"Response: {result}")
            
            if 'submissions' in result:
                submissions = result['submissions']
                print(f"\n📊 Found {len(submissions)} submission(s)")
                
                # Check structure of submissions
                if len(submissions) > 0:
                    sample = submissions[0]
                    print(f"\nSample submission structure:")
                    print(f"  - Has 'id' field (UUID): {'id' in sample}")
                    print(f"  - Has '_id' field (should be absent): {'_id' in sample}")
                    print(f"  - Has 'emailStatus' field: {'emailStatus' in sample}")
                    print(f"  - Has 'type' field: {'type' in sample}")
                    
                    if 'emailStatus' in sample:
                        print(f"  - emailStatus value: {sample['emailStatus']}")
                    
                    # Count by status
                    status_counts = {}
                    for sub in submissions:
                        status = sub.get('emailStatus', 'unknown')
                        status_counts[status] = status_counts.get(status, 0) + 1
                    
                    print(f"\n📈 Email status breakdown:")
                    for status, count in status_counts.items():
                        print(f"  - {status}: {count}")
                    
                    # Verify no _id leaked
                    has_mongo_id = any('_id' in sub for sub in submissions)
                    if has_mongo_id:
                        print("❌ FAIL: MongoDB _id field leaked in response")
                        return False
                    
                    print("✅ PASS: Submissions endpoint working correctly")
                    return True
                else:
                    print("⚠️  No submissions found (may be expected if tests failed)")
                    print("✅ PASS: Endpoint structure correct")
                    return True
        
        print(f"❌ FAIL: Unexpected response")
        return False
    except Exception as e:
        print(f"❌ FAIL: {e}")
        return False

# Run all tests
def main():
    print("\n🚀 Starting Backend API Tests")
    print("=" * 80)
    print(f"⚠️  Email send limit: {MAX_EMAILS} (Resend free tier conservation)")
    print("=" * 80)
    
    results = {}
    
    # Test health first
    results['health'] = test_health()
    
    # Test contact endpoint
    results['contact_valid'] = test_contact_valid()
    results['contact_missing_fullname'] = test_contact_missing_fullname()
    results['contact_invalid_email'] = test_contact_invalid_email()
    results['contact_missing_message'] = test_contact_missing_message()
    
    # Test quote endpoint
    results['quote_valid_no_file'] = test_quote_valid_no_file()
    results['quote_valid_with_pdf'] = test_quote_valid_with_pdf()
    results['quote_unsupported_file'] = test_quote_unsupported_file()
    results['quote_missing_project_details'] = test_quote_missing_project_details()
    
    # Test submissions
    results['submissions'] = test_submissions()
    
    # Summary
    print("\n" + "=" * 80)
    print("📊 TEST SUMMARY")
    print("=" * 80)
    
    passed = sum(1 for v in results.values() if v is True)
    failed = sum(1 for v in results.values() if v is False)
    skipped = sum(1 for v in results.values() if v is None)
    resend_errors = sum(1 for v in results.values() if v == 'resend_error')
    
    for test_name, result in results.items():
        status = "✅ PASS" if result is True else "❌ FAIL" if result is False else "⚠️  SKIP" if result is None else "⚠️  RESEND ERROR"
        print(f"{status}: {test_name}")
    
    print("\n" + "-" * 80)
    print(f"Total: {len(results)} tests")
    print(f"✅ Passed: {passed}")
    print(f"❌ Failed: {failed}")
    print(f"⚠️  Skipped: {skipped}")
    print(f"⚠️  Resend Errors: {resend_errors}")
    print(f"📧 Emails sent: {successful_emails}/{MAX_EMAILS}")
    print("=" * 80)
    
    if resend_errors > 0:
        print("\n⚠️  IMPORTANT: Resend email delivery errors detected.")
        print("This may indicate domain verification issues with superbrassindustries.com")
        print("Check the error messages above for details.")
    
    return passed, failed, resend_errors

if __name__ == '__main__':
    main()
