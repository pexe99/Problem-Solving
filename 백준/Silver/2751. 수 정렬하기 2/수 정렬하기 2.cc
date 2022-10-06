#include <iostream>
#include <set>
using namespace std;

int main() {
	int N;
	cin >> N;

	set<int> s;
	for (int i = 0; i < N; i++) {
		int input;
		cin >> input;
		s.insert(input);
	}

	for (auto iter : s) {
		cout << iter << "\n";
	}
}