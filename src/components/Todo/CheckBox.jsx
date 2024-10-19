import Deleticon from "./DeletIcon";
import Editeicon from "./editeicon";
import Todo from "./Todo";

export default function CheckBox({ TodoData, DeleteIcon , todotoggelstatus}) {
  return (
    <ul className="list-reset">
      <li className="relative flex items-center justify-between px-2 py-6 border-b">
        <div>
          <input
            type="checkbox"
            checked={TodoData?.status}
            onChange={() => {todotoggelstatus(TodoData)}}
          />
          <p
            className={`inline-block mt-1 ml-2 text-gray-600 ${
              TodoData?.status ? "line-through" : ""
            }`}
          >
            {TodoData?.tittle}
          </p>
        </div>
        <button
          type="button"
          className="absolute right-0 flex items-center space-x-1"
        >
          <Deleticon onclick={() => DeleteIcon(TodoData)} />
          <Editeicon />
        </button>
      </li>
    </ul>
  );
}
