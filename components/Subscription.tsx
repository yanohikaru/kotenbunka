export default function Subscription() {
  return (
    <section className="bg-gray-50 rounded-2xl p-12">
      <h2 className="section-title">会員限定コンテンツ</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="card p-8 text-center">
          <h3 className="text-xl font-bold mb-4">基本プラン</h3>
          <p className="text-3xl font-bold mb-6">¥980<span className="text-sm text-gray-500">/月</span></p>
          <ul className="space-y-3 text-left mb-8">
            <li>✓ 基本的な文化記事の閲覧</li>
            <li>✓ 月1回のオンライン講座</li>
            <li>✓ コミュニティ参加</li>
          </ul>
          <button className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800">
            登録する
          </button>
        </div>
        
        <div className="card p-8 text-center border-2 border-red-700 relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-700 text-white px-4 py-1 rounded-full text-sm">
            人気
          </span>
          <h3 className="text-xl font-bold mb-4">プレミアムプラン</h3>
          <p className="text-3xl font-bold mb-6">¥1,980<span className="text-sm text-gray-500">/月</span></p>
          <ul className="space-y-3 text-left mb-8">
            <li>✓ すべての文化記事の閲覧</li>
            <li>✓ 週1回のオンライン講座</li>
            <li>✓ プレミアムコミュニティ参加</li>
            <li>✓ 専門家への質問権</li>
          </ul>
          <button className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800">
            登録する
          </button>
        </div>

        <div className="card p-8 text-center">
          <h3 className="text-xl font-bold mb-4">法人プラン</h3>
          <p className="text-3xl font-bold mb-6">¥4,980<span className="text-sm text-gray-500">/月</span></p>
          <ul className="space-y-3 text-left mb-8">
            <li>✓ すべてのコンテンツ閲覧</li>
            <li>✓ 無制限のオンライン講座</li>
            <li>✓ ビジネス向けコンサルティング</li>
            <li>✓ カスタマイズされた研修プラン</li>
          </ul>
          <button className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800">
            お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
}