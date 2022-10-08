#include <iostream>
#include <map>
#include <string>
using namespace std;


int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	int N, M;
	cin >> N >> M;

	map<string, string> m;
	for (int i = 0; i < N; i++) {
		string name, pw;
		cin >> name >> pw;
		m.insert({ name, pw });
	}

	for (int i = 0; i < M; i++) {
		string input;
		cin >> input;
		cout << m[input] << "\n";
	}
}