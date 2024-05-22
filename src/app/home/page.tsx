export default function Index() {
  return (
    <div>
      <div className='relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#4c76cf] to-[#552ab8]'>
        <button className='absolute right-3 top-3 overflow-hidden rounded-md bg-[#32769ead] px-4 py-2 text-center text-base font-medium text-white hover:bg-[#1e830f]'>
          Custom Size
        </button>
        <div>
          <h2 className='pb-10 pt-6 text-3xl font-semibold text-white'>
            What will you design today
          </h2>
        </div>
      </div>
    </div>
  );
}
