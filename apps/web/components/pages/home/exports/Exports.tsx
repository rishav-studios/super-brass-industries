"use client"
import Fade from '@/components/animations/Fade'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { EyeBrowSimple } from '@/components/shared/SectionHeader'
import { exportCountries, type ExportCountry } from '@/constants/export_countries'
import { useGlobe } from '@/contexts/GlobeContext'
import Globe from './Globe'

const highlightedCountries = exportCountries.map((country: ExportCountry) => country.name)
type CountryCardProps = {
    country: ExportCountry;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}
const CountryCard = ({ country, onMouseEnter, onMouseLeave }: CountryCardProps) => {
    return (
        <Fade>
            <div
                className='group relative flex items-center gap-3 cursor-pointer'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {/* Flag ring + glow */}
                <div className='w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/10'>
                    <country.flag className='w-full h-full object-cover' />
                </div>

                {/* Country name */}
                <span
                    className='text-sm font-medium tracking-[0.18em] capitalize text-gray-600 group-hover:text-primary transition-colors duration-300 text-center leading-tight'
                >
                    {country.alias ? country.alias : country.name}
                </span>
            </div>
        </Fade>
    )
}

const Exports = () => {
    const { selectedCountry, setSelectedCountry } = useGlobe()
    return (
        <Section className='bg-white'>


            <div className='absolute inset-0 mt-40 w-[screen] h-screen'>

                <Globe highlightedCountries={highlightedCountries} className='scale-98' selectedCountry={selectedCountry} />
            </div>

            <Container className='relative z-2'>
                <div className="w-max mx-auto space-y-2">

                    <EyeBrowSimple>Exports</EyeBrowSimple>
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] max-w-xl leading-[1.12]">
                        We are worldwide.
                    </h2>

                </div>

            </Container>
            {/* countries grid */}
            <Container className="p-8 rounded-md mt-[76dvh] space-y-8 relative z-10 bg-muted">
                <h3 className="text-3xl font-semibold">Countries We Export To</h3>
                <div className='grid grid-cols-4 gap-6'>
                    {
                        exportCountries.map((country: ExportCountry) => (
                            <CountryCard
                                key={country.name}
                                country={country}
                                onMouseEnter={() => setSelectedCountry(country.name)}
                                onMouseLeave={() => setSelectedCountry(null)}
                            />
                        ))
                    }
                </div>
            </Container>
        </Section>
    )
}

export default Exports