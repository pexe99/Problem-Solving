#include <iostream>
#include <vector>
using namespace std;

int T, N;
vector<long long> v(3, 1);

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	while (v.size() != 100) v.push_back(v[v.size() - 2] + v[v.size() - 3]);

	cin >> T;
	while (T--) {
		cin >> N;
		cout << v[N - 1] << "\n";
	}

	return 0;
}