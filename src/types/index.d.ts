type SearchParamsProps = {
  searchParams: Record<string, string> | null | undefined;
};

type InfoComponent = {
  name: string;
  type: string;
  id: number;
  height: number;
  width: number;
  opacity: number;
  top: number;
  left: number;
  rotate: number;
  z_index: number;
  color: string;
  image: string;
  radius: number;
  padding: number;
  fontSize: number;
  text: string;
  weight: number;
  setCurrentComponent: Dispatch<SetStateAction<object>>;
  resizeElement: (id: string, InfoComponent) => void;
  rotateElement: (id: string, InfoComponent) => void;
  moveElement: (id: string, InfoComponent) => void;
};

type Shape = 'rect' | 'circle' | 'triangle';

