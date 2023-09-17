type MountProps = {
  defaultHistory?: History;
  initialPath?: string;
  onNavigate?: (options: { location: Location }) => void;
};
