// import { ReactElement, forwardRef } from "react";
// import { TInputRadio } from "./type";
// import { Label } from "@/components";
// import { TRadioField } from "@/components/molecules/forms/fields/radio/type";
// export const InputRadio = forwardRef<HTMLInputElement, TRadioField>((props, ref): ReactElement => {
//   const { direction = "row" } = props;
//   const directionClass = direction === "row" ? "flex flex-row gap-x-4" : "flex flex-col gap-y-1";
//   return (
//     <section className={directionClass}>
//       {props?.options?.map((option, index) => (
//         <div className="flex gap-x-1 items-center" key={index}>
//           <input
//             {...props}
//             id={`${props.name}-${option.value}`}
//             data-testid="radio-field"
//             type="radio"
//             key={index}
//             ref={ref}
//             checked={props.value === option.value}
//             onChange={() => props.onChange?.(option.value)}
//             onClick={() => props.onChange?.(option.value)}
//           />
//           <Label
//             onClick={() => props.onChange?.(option.value)}
//             className="font-medium text-gray-600 text-sm select-none cursor-pointer"
//             size={props.variant}
//             disabled={props.disabled}
//             htmlFor={`${props.name}-${option.value}`}
//             id={`${props.name}-${option.value}`}
//           >
//             {option.label}
//           </Label>
//         </div>
//       ))}
//     </section>
//   );
// });

// InputRadio.displayName = "InputRadio";
