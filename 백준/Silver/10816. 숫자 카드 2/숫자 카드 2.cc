#include <iostream>
#include <map>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	int N, M;
	cin >> N;

	map<int, int> m;
	for (int i = 0; i < N; i++) {
		int input;
		cin >> input;
		if (m.find(input) == m.end()) {
			m.insert({ input, 1 });
		}
		else {
			m[input] += 1;
		}
	}

	cin >> M;
	for (int i = 0; i < M; i++) {
		int input;
		cin >> input;
		if (m.find(input) == m.end()) {
			cout << 0 << "\n";
		}
		else {
			cout << m[input] << "\n";
		}
	}
}