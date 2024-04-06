import mysql.connector
from flask import Flask, jsonify, request
app = Flask(__name__)

# MySQL Database Configuration
db_config = {
    'host': 'bqmxzg6g69sv3tzom8zw-mysql.services.clever-cloud.com',
    'user': 'ulajfvm4xbcgpxfq',
    'password': 'MXBB1iUHEgeBvPjXvxqy',
    'database': 'bqmxzg6g69sv3tzom8zw'
}


def connect_to_database():
    try:
        connection = mysql.connector.connect(**db_config)
        return connection
    except mysql.connector.Error as err:
        print("Error connecting to MySQL database:", err)
        return None

@app.route('/stockalldata/<company_code>', methods=['GET'])
def get_stock_data(company_code):
    connection = connect_to_database()
    if not connection:
        return jsonify({'error': 'Failed to connect to the database'}), 500
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Companies where Symbol = %s", (company_code,))
    companies = cursor.fetchall()
    print(companies)
    cursor.execute("SELECT distinct  * FROM MonthlyStockData where CompanyID = %s", (companies[0]['CompanyID'],))
    data = cursor.fetchall()
    print(data)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)