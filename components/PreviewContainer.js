export default function PreviewContainer(props) {
  return (
    <li className="flex-shrink-0">
      <p className="text-sm text-slate-600 mb-2">{props.label}</p>
      {props.children}
    </li>
  );
}
