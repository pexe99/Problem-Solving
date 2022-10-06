#include <iostream>
#include <vector>
using namespace std;

int main() {
	int N;
	cin >> N;

	vector<string> s;
	vector<vector<string>> v(200, s);
	for (int i = 0; i < N; i++) {
		int age;
		string name;
		cin >> age >> name;
		v[age - 1].push_back(name);
	}

	for (int i = 0; i < 200; i++) {
		for (auto iter : v[i]) {
			cout << i + 1 << " " << iter << "\n";
		}
	}
}