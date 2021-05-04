import './Loader.scss';
/**
 * Component for ui loader
 * @component
 */
const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="Loader rounded-full w-16 h-16 border-4" />
    </div>
  );
};

export default Loader;