#include <iostream>
#include <set>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	int N, M;
	cin >> N;

	set<int> v;
	for (int i = 0; i < N; i++) {
		int input;
		cin >> input;
		v.insert(input);
	}

	cin >> M;

	while (M--) {
		int result = 0;
		int input;
		cin >> input;
		if (v.find(input) == v.end()) cout << 0 << "\n";
		else cout << 1 << "\n";
	}
}