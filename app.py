from flask import Flask, request, render_template

app = Flask(__name__)
port = 3000

# GET 요청 처리
@app.route('/')
def index():
    return render_template('index.html')

# POST 요청 처리
@app.route('/submit', methods=['POST'])
def submit():
    user_input = request.form['userInput']
    print('사용자 입력:', user_input)
    return '입력한 내용은 콘솔에 출력되었습니다.'

if __name__ == '__main__':
    app.run(debug=True, port=port)