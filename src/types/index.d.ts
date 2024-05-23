type SearchParamsProps = {
  searchParams: Record<string, string> | null | undefined;
};

type InfoComponent = {
  name: string;
  type: string;
  id: number;
  height: number;
  width: number;
  z_index: number;
  color: string;
  image: string;
  setCurrentComponent: Dispatch<SetStateAction<object>>;
};
