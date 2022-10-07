#include <iostream>
#include <math.h>
#include <string>
using namespace std;

void hanoi(int N, int from, int to, int temp) {
	if (N == 1) {
		cout << from << " " << to << "\n";
		return;
	}
	else {
		hanoi(N - 1, from, temp, to);
		cout << from << " " << to << "\n";
		hanoi(N - 1, temp, to, from);
	}
}

int main() {
	int N;
	cin >> N;
	string a = to_string(pow(2, N));
	int x = a.find('.');
	a = a.substr(0, x);
	a[a.length() - 1] -= 1;
	cout << a << "\n";
	if (N <= 20) {
		hanoi(N, 1, 3, 2);
	}
}