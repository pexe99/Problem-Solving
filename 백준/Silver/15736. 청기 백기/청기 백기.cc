#include <iostream>
#include <vector>
using namespace std;

int N, result;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;

	for (int i = 1; i * i <= N; i++) result++;

	cout << result << "\n";

	return 0;
}