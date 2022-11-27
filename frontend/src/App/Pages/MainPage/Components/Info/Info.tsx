import React from "react";

const Info = (props: any) => {
  const options: string[] = props.options;
  const optionsItem =
    options !== undefined
      ? options.map((item: string) => <option>{item}</option>)
      : null;
  return (
    <div className="block budget budget_block">
      <div className="budget_title">{props.title}:</div>
      <div className="budget_sum">{props.sum}</div>
      {options !== undefined ? (
        <select className="budget_select">{optionsItem};</select>
      ) : null}
    </div>
  );
};

export default Info;
