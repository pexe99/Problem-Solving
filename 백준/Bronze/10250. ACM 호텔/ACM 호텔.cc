#include <iostream>
#include <algorithm>
using namespace std;

int main() {
	int T, H, W, N;
	cin >> T;

	while (T--) {
		cin >> H >> W >> N;
		int result = (N - 1) / (H) + 1;
		if (N % H == 0) result += 100 * H;
		else result += N % H * 100;
		cout << result << "\n";
	}
}