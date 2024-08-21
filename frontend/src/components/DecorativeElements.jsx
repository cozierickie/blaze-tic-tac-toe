import { Fragment } from 'react';

function DecorativeElements() {
  return (
    <Fragment>
      <div className="absolute top-0 left-0 w-64 h-64 border-t-4 border-l-4 border-[#0074fc] transform rotate-45 opacity-60" />
      <div className="absolute bottom-[-15rem] right-[-15rem] w-[30rem] h-[30rem] border-4 border-[#0074fc] rounded-full opacity-60" />
    </Fragment>
  );
}

export default DecorativeElements;
