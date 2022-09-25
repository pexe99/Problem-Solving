#include <iostream>
#include <string>
using namespace std;

int main() {
	int N;
	cin >> N;

	for (int i = 1; i < N; i++) {
		string n = to_string(i);
		int result = i;
		for (int j = 0; j < n.length(); j++) {
			result = result +  n[j] - '0';
		}

		if (N == result) {
			cout << i << endl;
			return 0;
		}
	}
	cout << 0 << endl;
	return 0;
}