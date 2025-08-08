type LoadingScreenProps = {
  fullscreen?: boolean
  label?: string
}

export default function LoadingScreen({ fullscreen = true, label = 'Loading…' }: LoadingScreenProps) {
  return (
    <div className={fullscreen ? 'fixed inset-0 z-50 flex items-center justify-center bg-white' : 'flex items-center justify-center py-10'}>
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="size-14 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 size-14 rounded-full border-4 border-blue-600 border-l-transparent animate-spin" />
        </div>
        <p className="mt-4 text-sm text-gray-600">{label}</p>
      </div>
    </div>
  )
}