import CheckList from "@/components/Checklist/CheckList";

export default function Story() {
  return (
    <div className="flex flex-col gap-8 md:mx-20 ml-10 mr-8 my-10">
      <CheckList
        tasks={[
          {
            name: "The 48 Hour Ideathon",
            subtitle: "Behind the Scenes",
            description:
              "Spoiler Alert: Dusi just gave me the shock of my life!",
            timeline: {
              start: "6-7",
              end: "May 2023",
            },
            link: "/story/ideasprint",
          },
          {
            name: "Chalo Rajdhani",
            subtitle: "The Pretext",
            description: "Get a domain name for the project",
            timeline: {
              start: "13-21",
              end: "March 2024",
            },
            link: "/chalo-rajdhani-pretext",
          },
        ]}
      />
      {/*
      
         
        </div><LargeCard
            roboto_mono={roboto_mono.className}
            flex="flex-[3]"
            secondary="A Dream Come True"
            title="My Swift Student Challenge Journey!"
            link="/swift-student-challenge"
            subtitle="Spoiler Alert: I met Tim Cook"
            primary={
              "Wait....\nWas I just selected for Apple's annual student challenge?"
            }
            time="8"
          /><SmallCard
              roboto_mono={roboto_mono.className}
              title="Traversing the #GDGVerse: DevFest Vizag '22"
              primary={"DevFest Coming"}
              secondary={"$ volunteers assemble!"}
              duration={4}
              link=""
            /><LargeCard
            title="#DareToMakeADifference"
            roboto_mono={roboto_mono.className}
            flex="flex-[2]"
            secondary="IWD'23 Vizag"
            link=""
            primary={`Wait....\nWas the event an April's Fool?`}
            subtitle="Spoiler Alert: Not an April's Fool"
            time="12"
          />
       */}
    </div>
  );
}
