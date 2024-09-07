import { addTask, deleteTask } from "@/actions";
import db from "@/lib/db";

export default async function Home() {
  const tasks = await db.task.findMany(
    {
      orderBy: [
        {
          createdAt: 'desc'
        },
      ]
    }
  )

  return (
    <div className="">
      <div className="flex justify-center mt-12 ">
        <form action={addTask}>
          <div className="flex gap-2 w-[300px]">
            <input type="text" name="title" className="px-3 py-2 rounded text-black w-full" />
            <button type="submit" className="bg-teal-600 px-3 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center">
        <ul className="w-[300px]">
          {tasks.map(task => <li key={task.id} className="bg-stone-300 mt-2 rounded p-2 text-black flex justify-between items-center">
            {task.title}
            <form action={deleteTask}>
              <input type="hidden" name="id" value={task.id} />
              <button type="submit" className="p-1 bg-red-600 rounded text-white ">
                delete
              </button>
            </form>
          </li>)}
        </ul>
      </div>

    </div>
  );
}
