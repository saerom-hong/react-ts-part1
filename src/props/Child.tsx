interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return <div>
    `EYE COLOR IS ${color}`
     <button onClick={onClick}>Click Me</button> 
    </div>;
};
 
export const ChildAsFn: React.FC<ChildProps> = ({color, onClick}) => {
  return <div>
    {color}
    <button onClick={onClick}>Click Me</button> 
    </div>;
};