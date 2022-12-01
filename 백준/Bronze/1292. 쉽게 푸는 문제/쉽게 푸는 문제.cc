#include <iostream>
#include <vector>
using namespace std;

int A, B;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	vector<long long> sum;

	sum.push_back(0);
	int cur = 1;
	while (sum.size() != 1001) {
		for (int i = 0; i < cur; i++) {
			sum.push_back(sum.back() + cur);
			if (sum.size() == 1001) break;
		}
		cur++;
	}

	cin >> A >> B;

	cout << sum[B] - sum[A - 1] << "\n";

	return 0;
}