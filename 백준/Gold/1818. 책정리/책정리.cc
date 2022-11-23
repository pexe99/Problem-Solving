#include <iostream>
#include <vector>
using namespace std;

int N, x;
vector<int> LIS;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;
	for (int i = 0; i < N; i++) {
		cin >> x;
		auto iter = lower_bound(LIS.begin(), LIS.end(), x);
		if (iter == LIS.end()) {
			LIS.push_back(x);
		}
		else {
			*iter = x;
		}
	}
	cout << N - LIS.size() << "\n";

	return 0;
}