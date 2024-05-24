type ElementProps = {
  id: string;
  info: InfoComponent;
  exId: string;
};

export default function Element({ id, info, exId }: ElementProps) {
  // TODO: Check exId
  // TODO: Change rotate cursor icon
  return (
    <>
      {exId ? (
        <>
          <div
            onMouseDown={info.resizeElement(exId, info)}
            className='absolute -bottom-[3px] -right-[3px] z-50 hidden size-[10px] cursor-nesw-resize bg-green-600 group-hover:block'
          ></div>
          <div
            onMouseDown={info.resizeElement(exId, info)}
            className='absolute -right-[3px] -top-[3px] z-50 hidden size-[10px] cursor-nesw-resize bg-green-600 group-hover:block'
          ></div>
          <div
            onMouseDown={info.resizeElement(exId, info)}
            className='absolute -bottom-[3px] -left-[3px] z-50 hidden size-[10px] cursor-nesw-resize bg-green-600 group-hover:block'
          ></div>
        </>
      ) : (
        <>
          <div
            onMouseDown={info.resizeElement(id, info)}
            className='absolute -bottom-[3px] -right-[3px] z-50 hidden size-[10px] cursor-nesw-resize bg-green-600 group-hover:block'
          ></div>
          <div
            onMouseDown={info.resizeElement(id, info)}
            className='absolute -right-[3px] -top-[3px] z-50 hidden size-[10px] cursor-nesw-resize bg-green-600 group-hover:block'
          ></div>
          <div
            onMouseDown={info.resizeElement(id, info)}
            className='absolute -bottom-[3px] -left-[3px] z-50 hidden size-[10px] cursor-nesw-resize bg-green-600 group-hover:block'
          ></div>
        </>
      )}
      <div
        onMouseDown={info.rotateElement(id, info)}
        className='absolute -left-[3px] -top-[3px] z-50 hidden size-[10px] cursor-nesw-resize bg-red-600 group-hover:block'
      ></div>
      <div
        onMouseDown={info.moveElement(id, info)}
        className='translate-[-50%,0%] absolute -left-[3px] top-[calc(50%-5px)] z-[99999] hidden size-[10px] cursor-nesw-resize bg-blue-600 group-hover:block'
      ></div>
      <div
        onMouseDown={info.moveElement(id, info)}
        className='translate-[-50%,0%] absolute -top-[3px] left-[calc(50%-5px)] z-[99999] hidden size-[10px] cursor-nesw-resize bg-blue-600 group-hover:block'
      ></div>
      <div
        onMouseDown={info.moveElement(id, info)}
        className='translate-[-50%,0%] absolute -right-[3px] top-[calc(50%-5px)] z-[99999] hidden size-[10px] cursor-nesw-resize bg-blue-600 group-hover:block'
      ></div>
      <div
        onMouseDown={info.moveElement(id, info)}
        className='translate-[-50%,0%] absolute -bottom-[3px] left-[calc(50%-5px)] z-[99999] hidden size-[10px] cursor-nesw-resize bg-blue-600 group-hover:block'
      ></div>
    </>
  );
}
