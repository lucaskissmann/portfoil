interface ContainerProps {
  children: React.ReactNode;
}
  
const Container: React.FC<ContainerProps> = ({
    children
  }) => {
    return ( 
      <div className="mx-1 md:mx-2 lg:mx-4 max-w-7xl">
        {children}
      </div>
    );
  }
   
export default Container;