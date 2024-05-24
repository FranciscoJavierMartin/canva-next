type ElementProps = {
  id: string;
  info: InfoComponent;
  exId: string;
};

export default function Element({ id, info, exId }: ElementProps) {
  // TODO: Check exId
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
    </>
  );
}
