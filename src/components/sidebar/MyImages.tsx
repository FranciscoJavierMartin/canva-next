export default function MyImages() {
  return (
    <div>
      <div>
        <label htmlFor='image'>Upload image</label>
        <input type='file' id='image' className='hidden' />
      </div>
    </div>
  );
}
