export default function TemplateDesign() {
  return (
    <>
      {[1, 2, 3, 4].map((design, i) => (
        <div
          className='group w-full cursor-pointer overflow-hidden rounded-md bg-[#ffffff]'
          key={design}
        >
          <img
            className='size-full'
            src='http://localhost:4200/proxy-image.jpg'
            alt=''
          />
        </div>
      ))}
    </>
  );
}
