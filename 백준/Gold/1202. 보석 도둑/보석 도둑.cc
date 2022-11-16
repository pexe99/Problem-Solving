#include <iostream>
#include <map>
#include <set>
using namespace std;

long long N, K, m, v, c;
multimap<long long, long long> jewel;
multiset<long long> bag;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> K;

	for (int i = 0; i < N; i++) {
		cin >> m >> v;
		jewel.insert({-v, m});
	}

	for (int i = 0; i < K; i++) {
		cin >> c;
		bag.insert(c);
	}
	
	long long result = 0;

	for (auto j = jewel.begin(); j != jewel.end(); j++) {
		auto iter = bag.lower_bound((*j).second);
		if (iter != bag.end()) {
			result += -1 * (*j).first;
			bag.erase(iter);
		}
	}

	cout << result << "\n";

	return 0;
}