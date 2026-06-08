interface RunnerUpIndicatorProps {
  className?: string;
}

export function RunnerUpIndicator({ className = "" }: RunnerUpIndicatorProps) {
  return (
    <div className={`inline-block text-xs font-medium text-gray-600 ${className}`}>
      Seçim Adayı
    </div>
  );
}
