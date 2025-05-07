import requests

url = "http://34.8.25.9/orders?limit=100"
params = {
    "user_id": "35e1e404-5f4d-4eaf-b90b-86d9df74664c"
}
headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzVlMWU0MDQtNWY0ZC00ZWFmLWI5MGItODZkOWRmNzQ2NjRjIiwibmFtZSI6IlN1cGVyIEFkbWluIiwiZW1haWwiOiJhZG1pbi51c2VyMUB0ZXN0LmluZyIsImNvbnRhY3RfbnVtYmVyIjoiMDYyNDYyOTI0OCIsImFkZHJlc3MiOiJCS0siLCJyb2xlIjoiYm90aCIsImlhdCI6MTc0NjYxMTQzNCwiZXhwIjoxNzQ2NjE1MDM0fQ.CE6QLM0A51UNNs7E7TNVkOFYa_Nx3sga-Gv95HxgaNY"
}

response = requests.get(url, params=params, headers=headers)
print(response.json())
