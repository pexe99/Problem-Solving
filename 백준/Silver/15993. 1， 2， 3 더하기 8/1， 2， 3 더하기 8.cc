#include <iostream>
#include <vector>
#define MOD 1000000009
using namespace std;

long long T, N;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	vector<pair<long long, long long>> result;
	result.push_back({ 1, 0 });
	result.push_back({ 1, 1 });
	result.push_back({ 2, 2 });

	for (int i = 3; i < 100000; i++) {
		result.push_back({ 
			(result[i - 1].second + result[i - 2].second + result[i - 3].second) % MOD ,
			(result[i - 1].first + result[i - 2].first + result[i - 3].first) % MOD 
			});
	}

	cin >> T;

	while (T--) {
		cin >> N;
		cout << result[N - 1].first << " " << result[N - 1].second << "\n";
	}

	return 0;
}