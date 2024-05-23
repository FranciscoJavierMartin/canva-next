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
            src='https://www.startpage.com/av/proxy-image?piurl=http%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2015%2F12%2FNature-Lake-Bled.-Desktop-background-image.jpg&sp=1716398712T6c0cfe91bc16bd680cc376ca747add95d22695488724690775950447b886e1c7'
            alt=''
          />
        </div>
      ))}
    </>
  );
}
