import { Fragment, ReactElement, useEffect } from "react";
import { TToastProps } from "./type";
import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import clsx from "clsx";
import {
  closeButtonClasses,
  closeIcon,
  getIcon,
  iconClasses,
  positionClasses,
  wrapperClasses,
} from "./utils";
import { Button } from "@/components";

export const Toast = (props: TToastProps): ReactElement => {
  const snackbarVariants: Variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };
  const animateControl = useAnimation();

  let { type = "info", icon = "", message = "---", position = "topRight" } = props;
  icon = icon === "" ? getIcon(type) : icon;

  useEffect(() => {
    if (props.show) {
      animateControl.start("visible");
      const timeoutId = setTimeout(() => {
        props.onClose();
        animateControl.start("hidden");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [animateControl, props.show, props.onClose]);

  const toastPropsStyle = clsx(
    wrapperClasses[type],
    "flex justify-between items-center overflow-hidden rounded-md shadow-lg my-3",
  );
  const iconPropsStyle = clsx(iconClasses[type], "flex p-3");
  const positionProps = clsx(positionClasses[position], "fixed w-screen max-w-xs z-50 ");

  return (
    <Fragment>
      <AnimatePresence>
        <motion.section
          variants={snackbarVariants}
          initial="hidden"
          animate={animateControl}
          exit={{ opacity: 0, x: 50 }}
          className={positionProps}
          role="alert"
        >
          <div className={toastPropsStyle}>
            {icon && (
              <div className={iconPropsStyle}>
                <div className="inline-flex justify-center items-center w-6 h-6">
                  <span className="sr-only">{type} Icon</span>
                  {icon}
                </div>
              </div>
            )}
            <p className="text-sm font-semibold flex-grow p-3">{message}</p>

            <Button aria-label="Close" onClick={props.onClose} className={closeButtonClasses}>
              <span className="sr-only">Close</span>
              {closeIcon}
            </Button>
          </div>
        </motion.section>
      </AnimatePresence>
    </Fragment>
  );
};
