#include <iostream>
#include <map>
#include <set>
using namespace std;

int main() {
	int N, input;
	
	cin >> N;
	map<int, set<int>> m;
	for (int i = 0; i < N; i++) {
		int A, B;
		cin >> A >> B;
		m[A].insert(B);
	}

	for (auto iter : m) {
		for (auto iter2 : iter.second) {
			cout << iter.first << " " << iter2 << "\n";
		}
	}
}