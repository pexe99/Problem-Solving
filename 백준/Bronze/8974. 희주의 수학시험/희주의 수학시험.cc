#include <iostream>
#include <vector>
using namespace std;

int A, B, current, sum, counter;
vector<int> result;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> A >> B;

	while (++current) {
		for (int i = 0; i < current; i++) {
			sum += current;
			result.push_back(sum);
			counter++;
		}
		if (counter >= B) break;
	}

	if (A == 1) cout << result[B - 1] << "\n";
	else cout << result[B - 1] - result[A - 2] << "\n";
}