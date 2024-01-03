import { forwardRef } from "react";
import { TInputText } from "./type";
import { Icon } from "@iconify/react";

export const TagsInput = forwardRef<HTMLInputElement, TInputText>((props, ref) => {
  return (
    <div className="border border-gray-300 rounded-md text-sm bg-gray-50 flex gap-x-8 w-full px-2 min-h-full items-center">
      <ul className="flex gap-x-2 w-auto h-8 items-center justify-center list-none">
        {props.tags?.map((tag, idx) => (
          <li
            key={idx}
            className="flex items-center justify-center  gap-x-2 bg-violet-950 py-1 px-2 w-auto text-white list-none text-xs rounded-md"
          >
            <span className="mt-1">{tag}</span>
            <Icon
              className="hover:cursor-pointer"
              icon="majesticons:close"
              width={15}
              onClick={() => props?.onDeleteTag && props?.onDeleteTag(idx)}
            />
          </li>
        ))}
      </ul>
      <input
        id={props.name}
        className="flex-1 h-9 text-md focus:outline-transparent border-none outline-none bg-gray-50  text-gray-500"
        type="text"
        data-testid="input-text"
        ref={ref}
        onKeyDown={props.onKeyDown}
        placeholder="Press Enter to add tags"
      />
    </div>
  );
});

TagsInput.displayName = "TagsInput";
