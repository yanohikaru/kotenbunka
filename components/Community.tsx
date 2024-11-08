export default function Community() {
  return (
    <section className="py-12 japanese-pattern">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-12">
        <h2 className="section-title">コミュニティ</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">交流の場</h3>
            <p className="text-gray-600">
              伝統文化に興味を持つ仲間たちと交流し、知識や経験を共有しましょう。
              初心者から専門家まで、誰もが参加できるコミュニティです。
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>オンライン討論会</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>専門家による質疑応答</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>イベント情報の共有</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">参加方法</h3>
            <p className="text-gray-600">
              会員登録後、すぐにコミュニティに参加できます。
              各種イベントの告知や参加申し込みもこちらから。
            </p>
            <div className="space-y-4">
              <button className="w-full bg-red-700 text-white py-3 rounded-lg hover:bg-red-800 transition-colors">
                コミュニティに参加
              </button>
              <button className="w-full border-2 border-red-700 text-red-700 py-3 rounded-lg hover:bg-red-50 transition-colors">
                イベントカレンダー
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}