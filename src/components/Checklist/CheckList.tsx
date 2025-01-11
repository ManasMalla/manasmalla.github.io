import styles from "./styles.module.css";

export default function CheckList(props: {
  tasks: {
    name: string;
    subtitle?: string | undefined;
    description: string;
    timeline: {
      start: string;
      end: string;
    };
    link: string;
  }[];
}) {
  return (
    <div className="checklist">
      <div id="tasks" className="tasks mt-2">
        {props.tasks.map((task, index) => (
          <a
            href={task.link}
            className={`task timeline md:pl-[30px] pl-[12px]`}
          >
            <div className="w-[80px] shrink-0 uppercase z-10 -translate-x-7 md:-translate-x-12 text-[8px] flex flex-col items-center">
              <p className="text-[1.4rem] font-bold">
                {task.timeline.start}
                <sup className="text-[0.8rem]">th</sup>
              </p>
              <p className="w-max mr-[8px]">{task.timeline.end}</p>
            </div>
            <div className="group">
              <p className="flex items-center">
                <span className="text-xl">{task.name}</span>
                <span className="arrow">{"›"}</span>
              </p>
              <p className="font-medium opacity-60 whitespace-pre-wrap text-sm">
                {task.subtitle}
              </p>
              <p className="whitespace-pre-wrap text-sm">{task.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
