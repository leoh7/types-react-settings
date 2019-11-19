module.exports = {
  mode: 'development',
  watch: true,
  // 엔트리 포인트
  entry: './src/index.tsx',

  // 빌드 결과물을 dist/main.js에 위치
  output: {
    filename: 'main.js',
    path: __dirname + '/dist'
  },

  // 디버깅을 위해 빌드 결과물에 소스맵 추가
  devtool: 'source-map',

  resolve: {
    // 파일 확장자 처리
    extensions: ['.ts', '.tsx', '.js', '.json'],
/*  alias: {
      '@src': path.resolve(__dirname, 'src'),
    } */
  },

  module: {
    rules: [
      // .ts나 .tsx 확장자를 ts-loader가 트랜스파일
      { test: /\.scss?$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.tsx?$/, loader: 'babel-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},
    ]
  },
  
  devServer: {
    contentBase: './',
    publicPath: '/dist',

    // 직접 주소 입력을 위한 설정
    inline: true,
    port: 8080,
    historyApiFallback: true,
  }
};