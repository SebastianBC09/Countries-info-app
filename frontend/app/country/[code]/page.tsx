import { CountryDetailPage } from '@/components/pages/CountryDetailPage';
import { Suspense } from 'react';
interface CountryPageProps {
  params: {
    code: string;
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { code } = await params
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-gray-50 to-gray-100
                    dark:from-gray-900 dark:to-gray-800">
        <div className="w-16 h-16 border-4 border-blue-500 rounded-full
                     border-t-transparent animate-spin">
        </div>
      </div>
    }>
      <CountryDetailPage code={code} />
    </Suspense>
  );
}
