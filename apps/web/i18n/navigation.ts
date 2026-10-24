import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Create locale-aware navigation hooks/components from the routing config
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
