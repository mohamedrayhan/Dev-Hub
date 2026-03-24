import requests
import json

BASE_URL = "http://localhost:5000/api"

def test_trend():
    print("Testing /api/predict/trend...")
    payload = {
        "sequence": [
            {"heart_rate": 75, "spo2": 98, "temperature": 36.8, "respiratory_rate": 16},
            {"heart_rate": 80, "spo2": 97, "temperature": 37.0, "respiratory_rate": 18},
            {"heart_rate": 90, "spo2": 95, "temperature": 37.5, "respiratory_rate": 20},
            {"heart_rate": 105, "spo2": 92, "temperature": 38.2, "respiratory_rate": 24},
            {"heart_rate": 115, "spo2": 89, "temperature": 39.0, "respiratory_rate": 28}
        ]
    }
    try:
        response = requests.post(f"{BASE_URL}/predict/trend", json=payload)
        print(f"Status: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
    except Exception as e:
        print(f"Error: {e}")

def test_explanation():
    print("\nTesting /api/explain-trend...")
    payload = {
        "trend": "Deteriorating",
        "confidence": 0.85,
        "vitals": {"heart_rate": 115, "spo2": 89, "temperature": 39.0}
    }
    try:
        response = requests.post(f"{BASE_URL}/explain-trend", json=payload)
        print(f"Status: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_trend()
    test_explanation()
