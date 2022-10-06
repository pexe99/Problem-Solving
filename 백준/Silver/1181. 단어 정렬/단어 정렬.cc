#include <iostream>
#include <vector>
#include <set>
#include <string>
using namespace std;

int main() {
	int N;
	cin >> N;
	set<string> s;
	vector<set<string>> v(50, s);
	for (int i = 0; i < N; i++) {
		string input;
		cin >> input;
		v[input.length() - 1].insert(input);
	}

	for (int i = 0; i < 50; i++) {
		for (auto iter : v[i]) {
			cout << iter << "\n";
		}
	}
}