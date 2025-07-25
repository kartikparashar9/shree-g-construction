export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 text-center">
      <div>
        <h1 className="text-4xl font-bold text-red-600 mb-4">🚫 Unauthorized</h1>
        <p className="text-lg text-gray-700">You do not have access to this page.</p>
        <a href="/" className="mt-6 inline-block text-blue-600 underline">Go Back Home</a>
      </div>
    </div>
  );
}
