import JobCard from '@/components/JobCard'

export default function Home() {
  return (
    <section className="paddings flex flex-col gap-4 sm:gap-6">
      <h1 className='text-white font-medium text-3xl'>Find Jobs</h1>
      <div className='flex gap-6 sm:gap-8 flex-wrap items-center justify-start'>
        <JobCard 
          title="Sr. UX Designer"
          companyImage="/google.png"
          companyName="Google"
          country="New York"
          employmentType="Full-time"
          description="UX Designers are the synthesis of design and development. They take Google's most innovative product concepts...Read More"
          datePosted="Posted 2 days ago"
          salary="$50K/mo"
        />
        <JobCard 
          title="Project Manager"
          companyImage="/airbnb.png"
          companyName="Airbnb"
          country="Sydney"
          employmentType="Part-time"
          description="Airbnb was born in 2007 when two Hosts welcomed three guests to their San Francisco home,...Read More"
          datePosted="Posted 5 days ago"
          salary="$20K/mo"
        />
        <JobCard 
          title="UX Designer"
          companyImage="/spotify.png"
          companyName="Spotify"
          country="New York"
          employmentType="Full-time"
          description="UX Designers are the synthesis of design and development. They take Spotify's most innovative product concepts...Read More"
          datePosted="Posted 2 days ago"
          salary="$30K/mo"
        />
        <JobCard 
          title="Project Manager"
          companyImage="/airbnb.png"
          companyName="Airbnb"
          country="Sydney"
          employmentType="Part-time"
          description="Airbnb was born in 2007 when two Hosts welcomed three guests to their San Francisco home,...Read More"
          datePosted="Posted 5 days ago"
          salary="$20K/mo"
        />
        <JobCard 
          title="UX Designer"
          companyImage="/spotify.png"
          companyName="Spotify"
          country="New York"
          employmentType="Full-time"
          description="UX Designers are the synthesis of design and development. They take Spotify's most innovative product concepts...Read More"
          datePosted="Posted 2 days ago"
          salary="$30K/mo"
        />
        <JobCard 
          title="Sr. UX Designer"
          companyImage="/google.png"
          companyName="Google"
          country="New York"
          employmentType="Full-time"
          description="UX Designers are the synthesis of design and development. They take Google's most innovative product concepts...Read More"
          datePosted="Posted 2 days ago"
          salary="$50K/mo"
        />
      </div>
    </section>
  )
}
