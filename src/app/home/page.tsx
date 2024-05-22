import NewDesignForm from '@/components/forms/NewDesignForm';

export default function Index() {
  return (
    <div>
      <div className='relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#4c76cf] to-[#552ab8]'>
        <NewDesignForm />
        <div>
          <h2 className='pb-10 pt-6 text-3xl font-semibold text-white'>
            What will you design today
          </h2>
        </div>
      </div>
    </div>
  );
}
